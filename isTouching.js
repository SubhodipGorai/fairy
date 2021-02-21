function isTouching(moving,fix){
    if(moving.x - fix.x <moving.width/2+fix.width/2 &&
       fix.x - moving.x <fix.width/2+moving.width/2 &&
       moving.y - fix.y <moving.width/2+fix.width/2 &&
        fix.y - moving.y <fix.width/2+moving.width/2){
      return true;
      }
  }