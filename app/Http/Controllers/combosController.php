<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\AcademiPeriod;
use App\Career;
use App\FraquencyOfActivity;


class combosController extends Controller
{
  public function show(){
    $academiPreriod=AcademiPeriod::all("details");
    $career=Career::all("description");
    $fraquencyOfActivity=FraquencyOfActivity::all();
    $combos=array("academiPreriod"=>$academiPreriod,"career"=>$career);
    return $combos;
 }


}