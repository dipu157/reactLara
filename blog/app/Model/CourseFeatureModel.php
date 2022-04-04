<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CourseFeatureModel extends Model
{
    public $table='course_feature';
	public $primaryKey='id';
	public $incrementing=true;
	public $keyType='int';
	public  $timestamps=false;
}
