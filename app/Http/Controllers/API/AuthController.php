<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use phpseclib\Crypt\Hash;

class AuthController extends Controller
{

    private function generateToken(User $user, $message=false){
        $token =  $user->createToken(config("app.name", "laravel"))->accessToken;
        $resp = ['success' => true, "token" => $token, 'type' => 'bearer'];

        if ($message){
            $resp['message'] = $message;
        }

        return $resp;
    }

    public function register(Request $request) {
        $request->validate([
            'email' => 'required',
            'password' => 'string|required',
            'role' => 'numeric',
            'name' => 'string|required',
        ]);


        //get the current user
        $user = Auth::user();

        // Something is causing the role to be incorrectly type casted. I'm blaming the database -_-
        $role = (int) $user->role;

        // Only allow Admin users to create new users
        if($user->role !== 1) {
            return $this->err("Only admin users are allowed to create new accounts");
        }

        $input = $request->all();
        $input['password'] = \Illuminate\Support\Facades\Hash::make($request->password);

        $user = User::create($input);

        return response()->json(array_merge($this->generateToken($user), ['user'=> $user]));
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'exists:users,email|required',
            'password' => 'string|required',
        ]);

        if(Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            // generate a token  for this user
            $token=  $user->createToken(config("app.name", "laravel"))-> accessToken;
            return response()->json(array_merge($this->generateToken($user), ['user' => $user]), 200);
        }else{
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }

    public function logout(Request $request) {
        Auth::user()->token()->revoke();

        return response()->json(['Success' => true], 200);
    }
}
