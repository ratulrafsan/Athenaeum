<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request){
        return User::all();
    }

    public function updateUser(Request $request){
        $request->validate([
            'name' => 'string|sometimes',
            'password' => 'string|sometimes',
            'role' => 'numeric|sometimes',
            'id' => 'exists:users,id|required'
        ]);

        $user = User::findOrFail($request->id);

        $input = $request->all();

        unset($input['id']);

        $value = $user->update($input);

        return $value ? $this->success('User updated',  ['user'=> $user]) : $this->err('User could not be update');
    }

    public function deleteUser(Request $request){
        $user = User::findOrFail($request->id);

        $deleted = $user->delete();

        return $deleted  ? $this->success() : $this->err();
    }
}
