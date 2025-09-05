const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson"
}

function greetFluffy(fluffy) {
  return butters.greet.call(fluffy);
}
