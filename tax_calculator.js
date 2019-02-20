function task(type) {

    var inputs =
        [
            {
                "type": A,
                "percentage": "10%"
            },
            {
                "type": B,
                "percentage": "20%"
            },

            {
                "type": C,
                "percentage": "30%"

            },
            {
                "type": D,
                "percentage": "40%"
            },

            {
                "type": E,
                "percentage": "50%"

            }
        ];


    for (let i = 0; i < inputs.length; i++) {
        let obj = inputs[i];
        if (obj.type == type) {
            return obj.percentage;
        }
        return "Not available";
    }


}
function taxCalculator(type, amount) {
    var percentage = task(type);
    var json_object = {};
    if (percentage !== "Not found") {
        let deduction = (percentage * amount) / 100;
        let net = amount - deduction;
        json_object.type = type;
        json_object.total_amount = amount;
        json_object.percentage_deduction = percentage;
        json_object.amount_deducted = deduction;
        json_object.net = net;
        // console.log(percentage);
    }
    else {
        json_object.type = "Not found";
        json_object.total_amount = amount;
        json_object.percentage_deduction = 0;
        json_object.amount_deducted = 0;
        json_object.net = amount;
    }
    return json_object;
 }
 console.log(taxCalculator("A",300000));// category A 
 console.log(taxCalculator("B",800000));// category B
 console.log(taxCalculator("C",600000));// category C
 console.log(taxCalculator("D",300000));// category D
 console.log(taxCalculator("E",300000));//  category E
 console.log(taxCalculator("na",300000));// wrong category is passed