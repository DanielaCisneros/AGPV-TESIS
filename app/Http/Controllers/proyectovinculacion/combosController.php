<?php

namespace App\Http\Controllers\proyectovinculacion;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Vinculacion\AcademiPeriod;
use App\Models\Career;
use App\Models\Catalogue;



class combosController extends Controller
{
  public function show(){
   // $academiPreriod=AcademiPeriod::all("nombre","id");//esta tabla por el momento va hacer creada por el ignug 
    $career=Career::all('name','id');
    $careerprueba=Career::join('catalogues','careers.modality_id','=','catalogues.id')
    ->get(["careers.name","careers.id","catalogues.name as modality"]);
    $mode=Catalogue::where('type','career_modality')->get(["name","id"]);
    //$catalogue=Catalogue::all();
   // $AssignedLine=AssignedLine::all(); //en revision
    $meansOfVerification=Catalogue::where('type','Means_Verification')->get(["name","id"]);
    $fraquencyOfActivity=Catalogue::where('type','fraquency_Activity')->get(["name","id"]);
    $assignedLine=Catalogue::where('type','assigned_line')->get(["name","id"]);
    $linkageAxes=Catalogue::where('type','linkage_axes')->get(["name",'id']);
    $bondingActivities=Catalogue::where('type','bonding_activities')->get(["name","id"]);
    //
    $researchAreas=Catalogue::where('type','research_areas')->get(["name","id"]);;
    $combos=array(
        //"academiPreriod"=>$academiPreriod,
        "career"=>$career,
        "mode"=>$mode,
        "meansOfVerification"=>$meansOfVerification,
        "assignedLine"=>$assignedLine,
        "linkageAxes"=>$linkageAxes,
        "bondingActivities"=>$bondingActivities,
        "fraquencyOfActivity"=>$fraquencyOfActivity,
        "research_areas"=>$researchAreas,
        //"Catalogue"=>$catalogue,
        "careerprueba"=>$careerprueba,
      );
    return $combos;
 }


}