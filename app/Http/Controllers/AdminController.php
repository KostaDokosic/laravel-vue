<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getUsers(Request $request)
    {
        $userId = $request->input('userId');
        $user = User::find($userId);
        if(!$user) return [];

        if(!$user->isAdmin) return response([
            'error' => 'No access rights',
        ], 403);
         return response(User::all(), 200);
    }

    public function removeUser(Request $request)
    {
        $userId = $request->input('userId');
        $user = User::find($userId);
        if(!$user) return response('error', 404);
        if(!$user->isAdmin) return response([
            'error' => 'No access rights',
        ], 403);

        $target = User::find($request->input('targetId'));
        if(!$target) return response('error', 404);

        $target->remove();
        return response('Success', 200);
    }
}
