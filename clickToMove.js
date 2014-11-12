//outdated 11/8/14

var smooth:int;
private var targetPosition:Vector3;
var speed = 60;
 
function Update () {
 
        if(Input.GetKeyDown(KeyCode.Mouse0)) {
                smooth=1;
                var playerPlane = new Plane(Vector3.up, transform.position);
                var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
                var hitdist = 0.0;
 
                if (playerPlane.Raycast (ray, hitdist)) {
 
                        var targetPoint = ray.GetPoint(hitdist);
                        targetPosition = ray.GetPoint(hitdist);
                        var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
                        transform.rotation = targetRotation;
                }
        }
 
        var dir:Vector3 = targetPosition - transform.position;
        var dist:float = dir.magnitude;
        var move:float = speed * Time.deltaTime;
 
        if(dist > move){
                transform.position += dir.normalized * move;
 
        }
        else {
                transform.position = targetPosition;
        }
 
        transform.position += (targetPosition - transform.position).normalized * speed * Time.deltaTime;
        
        
     }
