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
    $career=Career::all('name');
    $mode=Catalogue::where('type','career_modality')->get('name','id');
    //$catalogue=Catalogue::all();
    //$fraquencyOfActivity=FraquencyOfActivity::all();borrar modelo
    $linkageAxes=LinkageAxes::all("details");
    $AssignedLine=AssignedLine::all("details"); //en revision
    $bondingActivities=BondingActivities::all("details");
    //$MeansOfVerification=MeansOfVerification::all("details");
    //$Mode=Mode::all('name');borrar modelo
    $meansOfVerification=Catalogue::where('type','Means_Verification')->get('name');
    $fraquencyOfActivity=Catalogue::where('type','fraquency_Activity')->get('name');
    $assignedLine=Catalogue::where('type','assigned_line')->get('name');
    
    $combos=array(
        "academiPreriod"=>$academiPreriod,
        "career"=>$career,
        "mode"=>$mode,
        "meansOfVerification"=>$meansOfVerification,
        "assignedLine"=>$assignedLine,
        "linkageAxes"=>$linkageAxes,
        "bondingActivities"=>$bondingActivities,
        "fraquencyOfActivity"=>$fraquencyOfActivity,
        //"Catalogue"=>$catalogue,
      );
    return $combos;
 }


}