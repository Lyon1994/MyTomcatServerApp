importPackage(java.util);
importPackage(org.redot.live.library.db);

function getDB(name_){
    return IDataBaseFactory.getInstance().get(name_);
}

function query(){
    
}



function main(){
    if(typeof begin != "undefined"){
        begin();
    }
    
    var query = getDB("test").createQuery();
    var list = query.doQuery('select id,name from test order by id',[]).rows([2,15]);
    //for(var i=0;i<list.size();i++){
     //   var obj = list.get(i);
     //   println(obj.get("id") + " | " + obj.get("name"));
        
        //println(obj.keys().join(","))
        //while(em.hasMoreElement()){
        //    var obj = em.nextElement();
        //    println("name=" + obj + ", value=" + objs.get(obj));
        //}
        
        //println(objs.join(","));
    //}
    println(query.rowCount("select id,name from test order by id",[]));
    /*
    var list = getDB("test").createQuery().doQuery('select * from test',[]).list();
    for(var i=0;i<list.size();i++){
        var objs = list.get(i);
        for(var j=0;j<objs.length;j++){
            println(objs[j]);
        }
        //println(objs.join(","));
    }*/
    //1alert("asas");
}


//main();