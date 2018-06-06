/**
 *
 * @param ps 包含了4个数的数组
 * @param targ 目标值
 * @param t
 * @constructor
 */
function NTBezierFunc(ps, targ, t){
    return (1.0-t) * (1.0-t) *(1.0-t)*ps[0] +
        3 * (1.0-t) * (1.0-t) * t * ps[1] +
        3 * (1.0-t) * t * t * ps[2] +
        t * t * t * ps[3] -
        targ;
}

/**
 * 求导数公式
 * @param ps
 * @param targ
 * @param t
 * @constructor
 */
function DeltaNTBezierFunc(ps, targ, t) {
    const dt = 1e-8;
    return (NTBezierFunc(ps, targ, t)-NTBezierFunc(ps, targ, t-dt))/dt;
}

function start(x) {
    // const dot_x = [0,0,25,50];
    // const dot_y = [0,15,5,0];
    const dot_x = [0,0,25,50];
    const dot_y = [0,15,5,0];
    let t = 0.5;  // t的初始值
    for(let i=0;i<1000;i++){
        t = t-NTBezierFunc(dot_x,x,t)/DeltaNTBezierFunc(dot_x,x,t);
        if(NTBezierFunc(dot_x,x,t)<=1e-5){
            break;
        }
    }
    const res_y = NTBezierFunc(dot_y,0,t);
    return res_y;
}