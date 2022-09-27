app.controller("myCtrl",function($scope,$http){
    $scope.array=[];

    $http.get("mobile.json").then(function(responce){
       $scope.data=responce.data.mobiles;

    })
    $scope.addtocart=function(id){
        console.log("hi")
        $scope.data.forEach(function(element){
            console.log("helo")
            

            if(element.id==id){
                
                $scope.array.push(element);
                $scope.data[id].status=true;
                $scope.length=$scope.array.length;
            }
        })

    
            
    }
    $scope.removefromcart=function(x){
        $scope.array.forEach(function(element,index){
            if(element.id==x){
                $scope.array.splice(index,1);
                $scope.data[x].status=false;
                $scope.length=$scope.array.length;

            }
        })
        
    }
    $scope.searchInput=""
    
    
})