
export class custObservable{
 subscribers=[];

  constructor(sub){
    setTimeout(()=>{
    sub(this);
    },1000);
  }

  subscribe(method){
    this.subscribers.push(method)
  }

next(value){
  this.subscribers.forEach(x=>{
    x(value);
  });

}

}