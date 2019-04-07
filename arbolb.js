class Nodo{
    constructor(dato){
        this.dato=dato;
        this.hijoizp=null;
        this.hijode=null;
    }
    set Dato(valor){
        this.dato=valor;
    }
    set Hijoizp(valor){
        this.hijoizp=valor;
    }
    set Hijode(valor){
        this.hijode=valor;
    }
    get Dato(){
        return this.dato;
    }
    get Hijoizp(){
        return this.hijoizp;
    }
    get Hijode(){
        return this.hijode;
    }

}
class ArbolBinario{
    constructor(){
        this.raiz=null;
    }
    agregar(nuevo){
        if(this.raiz==null){
            this.raiz=nuevo;
        }
             else
                 this.agregate(nuevo,this.raiz);
    }

    agregate(n, r){
        if(n.Dato<r.Dato){ //quizas aya error en n.dato
            if(r.Hijoizp==null){
                r.Hijoizp=n;
            }
                else
                 this.agregate(n,r.Hijoizp);
        }
        else{
            if(r.Hijode==null){
                r.Hijode=n;
            }
                 else
                    this.agregate(n,r.Hijode);
        }
        
    }
    inOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this.inO(this.raiz);
        }
    }

    inO(r){
        var c="";
            c+=r.Dato;
        if(r.Hijoizp!=null){
            c+=this.inO(r.Hijoizp)+"";    
        }
        c+=r.Dato;
            if(r.Hijode!=null){
               c+=""+inO(r.Hijode);
                 }
        return c
    }
    preOrder(){
        if(this.raiz==null){
            return "";
        }
        else
        return this.pOrder(this.raiz);
    }
    pOrder(r){
        let n="";
        n+=r.Dato;
        if(r.Hijoizp!=null){
                n+=""+this.pOrder(r.Hijoizp);
        }
        if(r.Hijode!=null){
                n+=this.pOrder(r.Hijode)+"";
        }
        return n;
    }
    postOrder(){
        if(this.raiz==null){
            return "";
        }
        else this.ostOrder(this.raiz);
    }
   ostOrder(r){
       let b="";
       b+=r.Dato;
       if(r.Hijoizp!=null){
            b+=""+this.ostOrder(r.Hijoizp);
       }
       if(r.Hijode!=null){
           b+=this.ostOrder(r.Hijode)+"";
       }
       return b;
   }
   buscar(dato,r){
    if(dato==r.dato){
        return true;
    }
        else{
            if(r.Hijoizp!=null){
                if(this.buscar(dato,r.Hijoizp)){
                    return true;
                }
            }
            if(r.Hijode!=null){
                if(this.buscar(dato,r.Hijode)){
                    return true;
                }
            }
        }
         return false;  
   }
}
