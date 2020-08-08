<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharitableInstitutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charitable_institutions', function (Blueprint $table) {
            $table->id();
            $table->text('logo');
            $table->string('ruc',15);
            $table->string('companyName',100);
            $table->string('address',100);
            $table->string('city',100);
            $table->string('province',100);
            $table->string('indirectBeneficiary',200);
            $table->string('legalRepresentativeName',3);
            $table->string('legalRepresentativeLastName',100);
            $table->string('legalRepresentativeID',100);
            $table->string('projectPostInCharge',100);
            $table->string('paeish',300);
            $table->string('coordinatorName',300);
            $table->string('coordinatorLastName',300);
            $table->string('coordinatorPost',300);
            $table->string('directBeneficiary',300);
            $table->text('COMPANYATTACHEDFILES');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('charitable_institutions');
    }
}
