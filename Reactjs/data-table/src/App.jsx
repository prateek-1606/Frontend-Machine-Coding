import "./App.css";
import DataTableComponent from "./components/DataTable";

function App() {
  const columns = [
    {
      label: "ID",
      key: "userId",
    },
    {
      label: "First Name",
      key: "firstName",
      sorting: true,
    },
    {
      label: "Last Name",
      key: "lastName",
    },
    {
      label: "City",
      key: "city",
      sorting: true,
    },
  ];

  const usersData = [
    { userId: 1, firstName: "Aarav", lastName: "Sharma", city: "Delhi" },
    { userId: 2, firstName: "Vivaan", lastName: "Verma", city: "Mumbai" },
    { userId: 3, firstName: "Aditya", lastName: "Singh", city: "Bengaluru" },
    { userId: 4, firstName: "Vihaan", lastName: "Gupta", city: "Chennai" },
    { userId: 5, firstName: "Arjun", lastName: "Mehta", city: "Pune" },
    { userId: 6, firstName: "Reyansh", lastName: "Malhotra", city: "Gurgaon" },
    { userId: 7, firstName: "Ayaan", lastName: "Khan", city: "Hyderabad" },
    { userId: 8, firstName: "Krishna", lastName: "Iyer", city: "Coimbatore" },
    { userId: 9, firstName: "Ishaan", lastName: "Chopra", city: "Amritsar" },
    { userId: 10, firstName: "Rohan", lastName: "Bansal", city: "Jaipur" },
    { userId: 11, firstName: "Ananya", lastName: "Kapoor", city: "Noida" },
    { userId: 12, firstName: "Diya", lastName: "Agarwal", city: "Agra" },
    { userId: 13, firstName: "Sara", lastName: "Ali", city: "Lucknow" },
    { userId: 14, firstName: "Pooja", lastName: "Reddy", city: "Vijayawada" },
    { userId: 15, firstName: "Kavya", lastName: "Nair", city: "Kochi" },
    { userId: 16, firstName: "Sneha", lastName: "Joshi", city: "Nagpur" },
    { userId: 17, firstName: "Neha", lastName: "Patel", city: "Ahmedabad" },
    { userId: 18, firstName: "Ritika", lastName: "Saxena", city: "Bhopal" },
    { userId: 19, firstName: "Nisha", lastName: "Das", city: "Kolkata" },
    { userId: 20, firstName: "Anjali", lastName: "Mishra", city: "Prayagraj" },

    { userId: 21, firstName: "Suresh", lastName: "Yadav", city: "Varanasi" },
    { userId: 22, firstName: "Mahesh", lastName: "Kulkarni", city: "Kolhapur" },
    { userId: 23, firstName: "Ramesh", lastName: "Rao", city: "Mysuru" },
    { userId: 24, firstName: "Sunil", lastName: "Chaudhary", city: "Meerut" },
    { userId: 25, firstName: "Deepak", lastName: "Thakur", city: "Shimla" },
    { userId: 26, firstName: "Amit", lastName: "Pandey", city: "Kanpur" },
    { userId: 27, firstName: "Vikas", lastName: "Soni", city: "Udaipur" },
    { userId: 28, firstName: "Manoj", lastName: "Tiwari", city: "Patna" },
    { userId: 29, firstName: "Rahul", lastName: "Jain", city: "Indore" },
    { userId: 30, firstName: "Kunal", lastName: "Arora", city: "Faridabad" },

    { userId: 31, firstName: "Sanjay", lastName: "Goyal", city: "Panipat" },
    { userId: 32, firstName: "Nitin", lastName: "Rawat", city: "Dehradun" },
    { userId: 33, firstName: "Prakash", lastName: "Bora", city: "Guwahati" },
    { userId: 34, firstName: "Alok", lastName: "Tripathi", city: "Rewa" },
    { userId: 35, firstName: "Siddharth", lastName: "Malik", city: "Rohtak" },
    { userId: 36, firstName: "Harsh", lastName: "Vardhan", city: "Ranchi" },
    {
      userId: 37,
      firstName: "Abhishek",
      lastName: "Srivastava",
      city: "Gorakhpur",
    },
    { userId: 38, firstName: "Tarun", lastName: "Khanna", city: "Ludhiana" },
    { userId: 39, firstName: "Pankaj", lastName: "Singhal", city: "Alwar" },
    { userId: 40, firstName: "Mohit", lastName: "Ahuja", city: "Jalandhar" },

    { userId: 41, firstName: "Ashish", lastName: "Negi", city: "Haldwani" },
    { userId: 42, firstName: "Ravi", lastName: "Kumar", city: "Muzaffarpur" },
    { userId: 43, firstName: "Vivek", lastName: "Mishra", city: "Satna" },
    { userId: 44, firstName: "Shubham", lastName: "Bhardwaj", city: "Mathura" },
    { userId: 45, firstName: "Gaurav", lastName: "Chawla", city: "Ambala" },
    { userId: 46, firstName: "Naveen", lastName: "Shetty", city: "Mangaluru" },
    { userId: 47, firstName: "Karthik", lastName: "Raj", city: "Salem" },
    { userId: 48, firstName: "Ajay", lastName: "Pathak", city: "Ayodhya" },
    { userId: 49, firstName: "Rohit", lastName: "Bisht", city: "Kotdwar" },
    { userId: 50, firstName: "Manish", lastName: "Shukla", city: "Raipur" },
  ];

  return (
    <>
      <DataTableComponent columns={columns} tableData={usersData} pagination />
    </>
  );
}

export default App;
