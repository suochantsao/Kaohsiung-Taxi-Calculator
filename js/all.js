//變數宣告區
let day_startFee= 85;
let night_startFee= 105;

//指令宣告區
let _kmNum= document.querySelector('.kmNum');
let _minNum= document.querySelector('.minNum');
let _secNum= document.querySelector('.secNum');
let send= document.querySelector('.send');


send.addEventListener('click', function(){

    let dayPlusKm= (_kmNum.value-1.5)*1000;
    let nightPlusKm= (_kmNum.value-1.25)*1000;
    let dayPlusFee= (dayPlusKm/250)*5;
    let nightPlusFee= parseInt(nightPlusKm/208)*5;;
    let minTrans= _minNum.value*60;
    let totalSec= minTrans+parseInt(_secNum.value);
    let dayStopFee= parseInt(totalSec/180)*5;
    let nightStopFee= parseInt(totalSec/150)*5;
    let dayTotalFee;
    let nightTotalFee;
    
    if(_kmNum.value<=1.5 && _kmNum.value>=1.25){
        dayTotalFee= day_startFee+dayStopFee;
        nightTotalFee= night_startFee+nightPlusFee+nightStopFee; 
    }else if(_kmNum.value<1.25){
        dayTotalFee= day_startFee+dayStopFee;
        nightTotalFee= night_startFee+nightStopFee;
    }else{
        dayTotalFee= day_startFee+dayPlusFee+dayStopFee;
        nightTotalFee= night_startFee+nightPlusFee+nightStopFee; 
    }

    document.querySelector('.dayFeeResult').value=`${dayTotalFee} 元`;
    document.querySelector('.nightFeeResult').value=`${nightTotalFee} 元`;

})




