const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

const result = people.map(({name,address:{city, street:{name: streetname}}})=> {
    return `${name} lives in ${city} on ${streetname}`;
});

console.log(result);


const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

const result2={
  ...profile,
  ...updates,
  address:{
    ...profile.address,
    ...updates.address
  }
};