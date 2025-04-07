// for inputs to be 0-9, ",", " "
const inputs = document.querySelectorAll(".number");
const regex = new RegExp("^[0-9 ,]*$");

inputs.forEach(input => {
    input.addEventListener("beforeinput", (event) => {
        if (event.data != null && !regex.test(event.data)) {
            event.preventDefault();
        }
    });
});



// calculating

function calc(){
    
    // percentage

    let wwPerc = document.getElementById("wwPercentage");
    let wwPercInt = parseFloat(wwPerc.value, 10);

    let ptPerc = document.getElementById("ptPercentage");
    let ptPercInt = parseFloat(ptPerc.value, 10);

    let summPerc = document.getElementById("summPercentage");
    let summPercInt = parseFloat(summPerc.value, 10);

    if(Number((wwPercInt + ptPercInt + summPercInt)).toFixed(2) != 1){
        console.log("erm no");
        alert("MF, di equal to 100 percentage mo!")
    }
    else{

        let wwATScores = document.getElementById("wwAT").value;
        let wwATScoreSum = wwATScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);

        let wwHPSScores = document.getElementById("wwHPS").value;
        let wwHPSScoreSum = wwHPSScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);

        let ptATScores = document.getElementById("ptAT").value;
        let ptATScoreSum = ptATScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);

        let ptHPSScores = document.getElementById("ptHPS").value;
        let ptHPSScoreSum = ptHPSScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);

        let summATScores = document.getElementById("summAT").value;     
        let summATScoreSum = summATScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);

        let summHPSScores = document.getElementById("summHPS").value;
        let summHPSScoreSum = summHPSScores
            .split(",")
            .map(num => parseInt(num))
            .reduce((a, b) => a + b, 0);
        

        // checking

        if(wwATScoreSum > wwHPSScoreSum || ptATScoreSum > ptHPSScoreSum || summATScoreSum > summHPSScoreSum){
            console.log("attained score is higher than the highest possible")
        }

        let wwFinalSum = ((wwATScoreSum / wwHPSScoreSum) * 100) * wwPercInt;
        let ptFinalSum = ((ptATScoreSum / ptHPSScoreSum) * 100) * ptPercInt;
        let summFinalSum = ((summATScoreSum / summHPSScoreSum) * 100) * summPercInt;
        let rawGrade = Number(parseFloat((wwFinalSum + ptFinalSum + summFinalSum))).toFixed(2);
        let rawGradeChecker = Number((wwFinalSum + ptFinalSum + summFinalSum)).toFixed(2)

        if(isNaN(rawGradeChecker)){
            console.log("grade is NaN")
            document.getElementById("final").textContent="Invalid Input"
        }
        else{
            const transumtated = [
                [100, 100, "100"],
                [98.40, 99.99, "99"],
                [96.80, 98.39, "98"],
                [95.20, 96.79, "97"],
                [93.60, 95.19, "96"],
                [92.00, 93.59, "95"],
                [90.40, 91.99, "94"],
                [88.80, 90.39, "93"],
                [87.20, 88.79, "92"],
                [85.60, 87.19, "91"],
                [84.00, 85.59, "90"],
                [82.40, 83.99, "89"],
                [80.80, 82.39, "88"],
                [79.20, 80.79, "87"],
                [77.60, 79.19, "86"],
                [76.00, 77.59, "85"],
                [74.40, 75.99, "84"],
                [72.80, 74.39, "83"],
                [71.20, 72.79, "82"],
                [69.60, 71.19, "81"],
                [68.00, 69.59, "80"],
                [66.40, 67.99, "79"],
                [64.80, 66.39, "78"],
                [63.20, 64.79, "77"],
                [61.60, 63.19, "76"],
                [60.00, 61.59, "75"],
                [56.00, 59.99, "74"],
                [52.00, 55.99, "73"],
                [48.00, 51.99, "72"],
                [44.00, 47.99, "71"],
                [40.00, 43.99, "70"],
                [36.00, 39.99, "69"],
                [32.00, 35.99, "68"],
                [28.00, 31.99, "67"],
                [24.00, 27.99, "66"],
                [20.00, 23.99, "65"],
                [16.00, 19.99, "64"],
                [12.00, 15.99, "63"],
                [8.00, 11.99, "62"],
                [4.00, 7.99, "61"],
                [0.00, 3.99, "60"]
            ]
            
    
            // vlookup like function
    
            function vlookupRange(lookupValue, tableArray, returnIndex) {
                for (let i = 0; i < tableArray.length; i++) {
                  const [min, max] = tableArray[i];
                  if (lookupValue >= min && lookupValue <= max) {
                    return tableArray[i][returnIndex - 1]; // 1-based index like Excel
                  }
                }
                return null;
              }
    
              const transumtatedGrade = vlookupRange(rawGrade, transumtated, 3)
    
              console.log(rawGrade);
              console.log(transumtatedGrade);
    
              document.getElementById('final').textContent="Final Grade: " + transumtatedGrade;
    
        }
    }

    

}