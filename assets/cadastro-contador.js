(function(){
  const prefix='etdi_contador_cargo_v3_';
  function slug(v){return String(v||'').trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
  function read(key){try{return Math.max(0,parseInt(localStorage.getItem(key)||'0',10)||0);}catch(e){return 0;}}
  window.ETDIContador={
    get(cargo,id){try{if(localStorage.getItem(prefix+slug(cargo))!==null)return read(prefix+slug(cargo));}catch(e){}return Math.max(read('cadastro_vaga_'+id),read('cadastro_vaga_'+slug(cargo)));},
    save(cargo,id,n){const total=Math.max(0,Math.floor(Number(n)||0));try{localStorage.setItem(prefix+slug(cargo),String(total));}catch(e){}return total;},
    add(cargo,id){return this.save(cargo,id,this.get(cargo,id)+1);}
  };
})();
