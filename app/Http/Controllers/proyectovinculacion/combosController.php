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
   // $academiPreriod=AcademiPeriod::all("nombre","id");//esta tabla por el momento va hacer creada por el ignug 
    $career=Career::all('name','id');
    //$prueba=Career::find(1);
    

    $mode=Catalogue::where('type','career_modality')->get(["name","id"]);
    //$catalogue=Catalogue::all();
   // $AssignedLine=AssignedLine::all(); //en revision
    $meansOfVerification=Catalogue::where('type','Means_Verification')->get(["name","id"]);
    $fraquencyOfActivity=Catalogue::where('type','fraquency_Activity')->get(["name","id"]);
    $assignedLine=Catalogue::where('type','assigned_line')->get(["name","id"]);
    $linkageAxes=Catalogue::where('type','linkage_axes')->get(["name",'id']);
    $bondingActivities=Catalogue::where('type','bonding_activities')->get(["name","id"]);
    
    $combos=array(
        //"academiPreriod"=>$academiPreriod,
        "career"=>$career,
        "mode"=>$mode,
        "meansOfVerification"=>$meansOfVerification,
        "assignedLine"=>$assignedLine,
        "linkageAxes"=>$linkageAxes,
        "bondingActivities"=>$bondingActivities,
        "fraquencyOfActivity"=>$fraquencyOfActivity,
        //"Catalogue"=>$catalogue,
       // "prueba"=>$prueba->modality,
      );
    return $combos;
 }


}