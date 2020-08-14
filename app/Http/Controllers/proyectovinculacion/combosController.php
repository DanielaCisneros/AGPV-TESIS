<?php

namespace App\Http\Controllers\proyectovinculacion;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Vinculacion\AcademiPeriod;
use App\Models\Career;
use App\Models\Catalogue;
use App\Models\Vinculacion\LinkageAxes;
use App\Models\Vinculacion\AssignedLine;
use App\Models\Vinculacion\BondingActivities;



class combosController extends Controller
{
  public function show(){
    $academiPreriod=AcademiPeriod::all("nombre");
    $career=Career::all('description');
    $catalogue=Catalogue::all();
  //  $fraquencyOfActivity=FraquencyOfActivity::all();borrar modelo
    $LinkageAxes=LinkageAxes::all("details");
  //  $AssignedLine=AssignedLine::all("details"); en revision
    $BondingActivities=BondingActivities::all("details");
    //$MeansOfVerification=MeansOfVerification::all("details");
 //   $Mode=Mode::all('name');borrar modelo
    $combos=array(
        "academiPreriod"=>$academiPreriod,
        "career"=>$career,
        "LinkageAxes"=>$LinkageAxes,
        "BondingActivities"=>$BondingActivities,
        "Catalogue"=>$catalogue
      );
    return $combos;
 }


}