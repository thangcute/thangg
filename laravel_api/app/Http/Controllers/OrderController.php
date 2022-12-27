<?php

namespace App\Http\Controllers;
use App\Models\order;
use Throwable;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index($id = null){
        if($id == null){
            return order::orderBy('username', 'asc')->get();
        } else {
            return order::find($id);
        }
    }
    public function create(Request $req){
        try{
            $order= new order();
            $order->username=$req->input('username');
            $order->OrderStatus=$req->input('OrderStatus');

            
            $order->save();
            return $order;

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }

}
