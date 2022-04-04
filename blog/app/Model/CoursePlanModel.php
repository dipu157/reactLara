<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CoursePlanModel extends Model
{
    public $table='course_plan';
	public $primaryKey='id';
	public $incrementing=true;
	public $keyType='int';
	public  $timestamps=false;
}
