var firstnamev, lastnamev, emailv, phonenov,itemv,quantityv,pricev;

function readFom() {
  firstnamev = document.getElementById("firstName").value;
  lastnamev = document.getElementById("lastName").value;
  emailv = document.getElementById("email").value;
  phonenov = document.getElementById("phoneNumber").value;
  itemv = document.getElementById("itemName").value;
  quantityv = document.getElementById("quantity").value;
  pricev = document.getElementById("price").value;
  console.log(firstnamev, lastnamev, emailv, phonenov, itemv, quantityv, pricev);
}
document.getElementById("submit").onclick = function () {
    readFom();

    firebase
    .database()
    .ref("customer/" + phonenov)
    .set({
      firstname: firstnamev,
      lastname: lastnamev,
      email: emailv,
      phonenumber: phonenov,
      itemname: itemv,
      quantity: quantityv,
      price: pricev,
    });
  alert("Data Inserted");
  
  document.getElementById("firstName").value ="";
  document.getElementById("lastName").value ="";
  document.getElementById("email").value ="";
  document.getElementById("phoneNumber").value ="";
  document.getElementById("itemName").value ="";
  document.getElementById("quantity").value ="";
  document.getElementById("price").value ="";
};

document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("customer/" + phonenov)
      .on("value", function (snap) {
        
        document.getElementById("firstName").value = snap.val().firstname;
        document.getElementById("lastName").value = snap.val().lastname;
        document.getElementById("email").value = snap.val().email;
        document.getElementById("phoneNumber").value = snap.val().phonenumber;
        document.getElementById("itemName").value = snap.val().itemname;
        document.getElementById("quantity").value = snap.val().quantity;
        document.getElementById("price").value = snap.val().price;
      });
  };