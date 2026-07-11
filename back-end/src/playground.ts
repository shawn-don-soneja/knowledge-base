import { Option } from "@swan-io/boxed"

const randomValueGenerator = function() {
    const randomValue: number = Math.round(Math.random() * 100);
    const thresholdCheck = (value: number) => {
        // console.log(value);
        if (value > 50){
            return Option.Some(value);
        } else {
            return Option.None();
        }
    }
    return thresholdCheck(randomValue)
}

let someArray: Option<number>[] = [];
for (let i = 0; i < 10; i++){
    someArray.push(randomValueGenerator())
}

console.log(someArray);

const myNewArray = someArray.map(
    (value) => value.match({
        Some: (num) => true,
        None: () => false
    })
)

console.log(myNewArray);
