<?php

namespace App\Http\Controllers\proyectovinculacion;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Vinculacion\AcademiPeriod;
use App\Models\Vinculacion\Career;
use App\Models\Vinculacion\FraquencyOfActivity;
use App\Models\Vinculacion\LinkageAxes;
use App\Models\Vinculacion\AssignedLine;
use App\Models\Vinculacion\BondingActivities;
use App\Models\Vinculacion\MeansOfVerification;
use App\Models\Vinculacion\Mode;


class combosController extends Controller
{
  public function show(){
    $academiPreriod=AcademiPeriod::all("details","year");
    $career=Career::all("description");
    $fraquencyOfActivity=FraquencyOfActivity::all("details");
    $LinkageAxes=LinkageAxes::all("details");
    $AssignedLine=AssignedLine::all("details");
    $BondingActivities=BondingActivities::all("details");
    $MeansOfVerification=MeansOfVerification::all("details");
    $Mode=Mode::all('name');
    $combos=array(
        "academiPreriod"=>$academiPreriod,
        "career"=>$career,
        "fraquencyOfActivity"=>$fraquencyOfActivity,
        "LinkageAxes"=>$LinkageAxes,
        "AssignedLine"=>$AssignedLine,
        "BondingActivities"=>$BondingActivities,
        "MeansOfVerification"=>$MeansOfVerification,
        "Mode"=>$Mode
      );
    return $combos;
 }


}