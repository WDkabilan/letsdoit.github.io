jQuery(document).ready(function(){

    function proc(){
        $(".bitA .cir").each(function()
        {
            var x=$(this).attr("bit");
            var y1=$(this).attr("bit-value");
            var y2=$(".bitB .cir:nth-child(" + (Number(x)+2).toString() + ") ").attr("bit-value");
            $(".bitB .cir").removeClass("inact");
            
        

            if($(".gate.and").hasClass("slt"))
            {
                if((y1 =="true") && (y2 =="true"))
                {
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").addClass("act");
                    
                }
                else{
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").removeClass("act");
                }
            }
            else if($(".gate.or").hasClass("slt"))
            {
                if((y1 =="true") || (y2 =="true"))
                {
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").addClass("act");
                }
                else{
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").removeClass("act");
                }               
            }
            else if($(".gate.nand").hasClass("slt"))
            {
                if(!((y1 =="true") && (y2 =="true")))
                {
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").addClass("act");
                }
                else{
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").removeClass("act");
                }
            }
            else if($(".gate.nor").hasClass("slt"))
            {
                if(!((y1 =="true") || (y2 =="true")))
                {
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").addClass("act");
                }
                else{
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").removeClass("act");
                }               
            }
            else if($(".gate.not").hasClass("slt"))
            {
                $(".bitB .cir").addClass("inact");
                $(".bitB .cir").removeClass("act");
                $(".bitB .cir").attr({"bit-value":"false"});
                if(y1 !="true")
                {
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").addClass("act");
                } 
                else{
                    $(".bitR .cir:nth-child(" + (Number(x)+2).toString() + ") ").removeClass("act");
                }              
            }
        });    
    }

    $(".bitR .cir").addClass("inact");
    
    $(".cir").on("click",function(){
        if($(this).hasClass("act")){
            $(this).removeClass("act");
            $(this).attr({"bit-value":"false"});
        }
        else{
            $(this).addClass("act");
            $(this).attr({"bit-value":"true"});
        }
        proc();
    });

    $(".gt .gate").on("click",function(){
        $(".gt .gate").each(function(){
            $(this).removeClass("slt");
        });
        $(this).addClass("slt");
        proc();
    });
    proc();

});