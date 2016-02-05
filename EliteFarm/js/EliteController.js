app.controller('EliteController', ['$scope', '$timeout', function ($scope, $timeout) {      
    
    var snd = new  Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    
    $scope.golemFB = new Firebase("https://yura.firebaseio.com/w_grounds");
    
    $scope.golemData = {};    
    
    $scope.save = function(){
        var data = {employeeName:$scope.employeeName,
                    employeeAge:$scope.employeeAge,
                    tableType:$scope.tableType};
        var id = $scope.myData.push().name();
        data.id = id;
        $scope.myData.child(id).set(data);
        $scope.employeeName = "";
        $scope.employeeAge = "";   
        $scope.tableType = "";
    };


    $scope.updateKillCount = function(channel){
        var conf = confirm("Confirm: Elite mob killed in Channel " + channel + "?");
        if (conf){
            if (channel < 10){
                channel = "0" + channel;
            }
            var chRef = new Firebase("https://yura.firebaseio.com/w_grounds/" + channel);    
            var currKills = $scope.golemData[channel]['kills'];
            var currStatus = $scope.golemData[channel]['status'];
            chRef.update({kills:currKills + 1});
            if(currStatus == "Grim"){
                if(currKills + 1 < 10){
                    chRef.update({color:"danger"});
                } else if(currKills + 1 < 15){
                    chRef.update({color:"warning"});
                }
            } else {
                chRef.update({color:"info"});
            }
        }                
    }
    
    $scope.updateDark = function(channel){
        var conf = confirm("Confirm: Channel " + channel + " is dark?");
        if (conf){
            if (channel < 10){
                channel = "0" + channel;
            }
            var chRef = new Firebase("https://yura.firebaseio.com/w_grounds/" + channel); 
            chRef.update({status:"Dark", kills:0, color:"info"});
        }        
    }    
    
    $scope.updateBoss = function(channel){
        var rawCh = channel;
        if (channel < 10){
            channel = "0" + channel;
        }
        var chRef = new Firebase("https://yura.firebaseio.com/w_grounds/" + channel); 
        var currBoss = $scope.golemData[channel]['boss'];
        var conf;
        if(currBoss == "MIA"){              
            conf = confirm("Confirm: Channel " + rawCh + "'s boss has spawned?");
        } else {
            conf = confirm("Confirm: Channel " + rawCh + "'s boss has been killed?");       
        }
        if (conf){
            if (channel < 10){
                channel = "0" + channel;
            }
            if(currBoss == "MIA"){
                chRef.update({boss:"LIVE", bossColor:"btn-success", color:"btn-success"});            
                
            } else {
                chRef.update({boss:"MIA", bossColor:"btn-danger", kills:0, color:"danger", status:"Grim"});
            }
        }        
    }
    
    
    $scope.golemFB.on('value', function(snapshot){
        $timeout(function(){
            $scope.golemData = snapshot.val();
            $scope.left = {01:$scope.golemData['01'],
                           02:$scope.golemData['02'],
                           03:$scope.golemData['03'],
                           04:$scope.golemData['04'],
                           05:$scope.golemData['05'],
                           06:$scope.golemData['06'],
                           07:$scope.golemData['07'],
                           08:$scope.golemData['08'],
                           09:$scope.golemData['09'],
                           10:$scope.golemData['10']};

            $scope.right = {11:$scope.golemData['11'],
                            12:$scope.golemData['12'],
                            13:$scope.golemData['13'],
                            14:$scope.golemData['14'],
                            15:$scope.golemData['15'],
                            16:$scope.golemData['16'],
                            17:$scope.golemData['17'],
                            18:$scope.golemData['18'],
                            19:$scope.golemData['19'],
                            20:$scope.golemData['20']};            
        });
    });
    
    boss01 = new Firebase("https://yura.firebaseio.com/w_grounds/01/boss");
    boss01.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss02 = new Firebase("https://yura.firebaseio.com/w_grounds/02/boss");
        boss02.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss03 = new Firebase("https://yura.firebaseio.com/w_grounds/03/boss");
        boss03.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss04 = new Firebase("https://yura.firebaseio.com/w_grounds/04/boss");
        boss04.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss05 = new Firebase("https://yura.firebaseio.com/w_grounds/05/boss");
        boss05.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss06 = new Firebase("https://yura.firebaseio.com/w_grounds/06/boss");
        boss06.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss07 = new Firebase("https://yura.firebaseio.com/w_grounds/07/boss");
        boss07.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss08 = new Firebase("https://yura.firebaseio.com/w_grounds/08/boss");
        boss08.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss09 = new Firebase("https://yura.firebaseio.com/w_grounds/09/boss");
        boss09.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss10 = new Firebase("https://yura.firebaseio.com/w_grounds/10/boss");
        boss10.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss11 = new Firebase("https://yura.firebaseio.com/w_grounds/11/boss");
        boss11.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss12 = new Firebase("https://yura.firebaseio.com/w_grounds/12/boss");
        boss12.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss13 = new Firebase("https://yura.firebaseio.com/w_grounds/13/boss");
        boss13.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss14 = new Firebase("https://yura.firebaseio.com/w_grounds/14/boss");
        boss14.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss15 = new Firebase("https://yura.firebaseio.com/w_grounds/15/boss");
        boss15.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss16 = new Firebase("https://yura.firebaseio.com/w_grounds/16/boss");
        boss16.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss17 = new Firebase("https://yura.firebaseio.com/w_grounds/17/boss");
        boss17.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss18 = new Firebase("https://yura.firebaseio.com/w_grounds/18/boss");
        boss18.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss19 = new Firebase("https://yura.firebaseio.com/w_grounds/19/boss");
        boss19.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
    boss20 = new Firebase("https://yura.firebaseio.com/w_grounds/20/boss");
        boss20.on('value', function(snapshot){
        if(snapshot.val() == "LIVE"){
            snd.play();
        } 
    });
}]);