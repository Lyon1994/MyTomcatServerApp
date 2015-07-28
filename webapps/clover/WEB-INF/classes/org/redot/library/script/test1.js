function xx(num){

    var query = getDB("test").createQuery();
    var list = query.doQuery('select id,name from test order by id',[]).rows([num,0]);
    for(var i=0;i<list.size();i++){
        var obj = list.get(i);
        println(obj.get("id") + " | " + obj.get("name"));

        //println(obj.keys().join(","))
        //while(em.hasMoreElement()){
        //    var obj = em.nextElement();
        //    println("name=" + obj + ", value=" + objs.get(obj));
        //}

        //println(objs.join(","));
    }
    if(typeof ee == "undefined"){
        println("sssssssss");
    }
    else{
        println("ee=" + ee);
    }

}

function begin1(){
    println("asssssssss");
}