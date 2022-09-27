app.controller("myCtrl",function($scope,$http){
    $scope.array=[];

    $http.get("mobile.json").then(function(responce){
       $scope.data=responce.data.mobiles;

    })
    $scope.addtocart=function(index){
        console.log($scope.data[index].status);
        $scope.data[index].status=true;
        console.log($scope.data[index].status);
        console.log("addtocartclicked")
        $scope.array.push($scope.data[index]);
        $scope.length=$scope.array.length;
        console.log($scope.array);

            
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