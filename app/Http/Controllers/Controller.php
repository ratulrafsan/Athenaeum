<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success ($message = "Operation Successful", $http_code_or_extra = 200){
        $res = [
            "success" => true,
            "message" =>  ucwords($message)
        ];
        $http_code = $http_code_or_extra;
        if (is_array($http_code_or_extra)){
            $http_code = 200;
            $res =  array_merge($res, $http_code_or_extra);
        }

        return Response::json($res, $http_code);
    }
    public function err($message = "Unknown Error", $http_code_or_extra = 418){
        $res = [
            "error" => true,
            "message" =>  ucwords($message)
        ];
        $http_code = $http_code_or_extra;
        if (is_array($http_code_or_extra)){
            $http_code = 418;
            $res =  array_merge($res, $http_code_or_extra);
        }
        return Response::json($res, $http_code);

    }
}
