<?php

namespace App\Http\Controllers\proyectovinculacion;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Vinculacion\AcademiPeriod;
use App\Models\Vinculacion\Career;
use App\Models\Vinculacion\FraquencyOfActivity;


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