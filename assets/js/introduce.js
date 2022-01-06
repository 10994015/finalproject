;window.onload=function(){
    var oCont = document.getElementsByClassName('content')[0];
     var oCont1 = document.getElementsByClassName('content1')[0];
     var aText1=['很差','較差','好棒','推薦','推爆'];
     var aText2=['很差','微差','一般','好棒','超棒'];

     //調用函數
     Stars(oCont,aText1);
     Stars(oCont1,aText2);

     function Stars(id,Txt){
         var index='';//使用這個index來記錄星星被點擊後的等級
         //獲取元素
         var aStar = id.getElementsByClassName('star');
         var oStars = id.getElementsByClassName('stars')[0];

         //讓全部星星變灰
         function gray(){
             for(var v=0;v<aStar.length;v++){
                 aStar[v].style.backgroundColor = '#ccc';
             }
         }

         for(let i=0;i<aStar.length;i++){
             //設置星星顏色
             function starColor(){
                // 前兩個星星顯示灰色
           if(i<=1){
                    gray();
                     for(let t=0;t<=i;t++){
                         aStar[t].style.backgroundColor = '#999';
                     }
                }else{
                     //后面星星都顯示橙色
                     gray();
                     for(let j=0;j<=i;j++){
                         aStar[j].style.backgroundColor = 'orange';
                     }
                 }
             }

            //鼠標移入變換星星顏色
            aStar[i].onmouseover=function(){
                oStars.innerHTML = Txt[i];
                starColor();
                //鼠標移出變灰，評論等級清空
         this.onmouseout=function(){
              gray();
               oStars.innerHTML = '評分';
                 //這裡必須為 === ，否則當index==0時，會進行隱式類型轉換，變成 (index=='') ==> (0=='')  ==> (false==false)，直接return出去                     
                  if(index==='')
                         {                             return;
                    }else if(index<=1){//通過index重新設置後面鼠標移開後的星星等級
                        for(var n=0;n<=index;n++){
                            aStar[n].style.backgroundColor = '#999';
                        }
                        oStars.innerHTML = Txt[index];
                    }else{
                     for(var m=0;m<=index;m++){//通過index重新設置後面鼠標移開後的星星等級
                            aStar[m].style.backgroundColor = 'orange';
                        }
                        oStars.innerHTML = Txt[index];
                    }
                }
            }

            //鼠標點擊固定星星等級和評論等級
            aStar[i].onclick=function(){
                // 關閉移出操作
                this.onmouseout=null;
                //星星等級
                oStars.innerHTML = Txt[i];
                if(i<=1){
                    for(let t=0;t<=i;t++){
                        aStar[t].style.backgroundColor = '#999';
                        //獲取當前點擊的是多少等級的星星，讓後面鼠標移開後可以重新設置星星等級
                        index=t;
                    }
                }else{
                    for(let j=0;j<=i;j++){
                        aStar[j].style.backgroundColor = 'orange';
                        //獲取當前點擊的是多少等級的星星，讓後面鼠標移開後可以重新設置星星等級
                        index=j;
                    }
                }
            }
        }
 }
}

// This button will increment the value
$(".plus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".minus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });