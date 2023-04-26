import React, { useEffect, useState } from "react";
import PersonItem from "./PersonItem";

const PersonsList = () => {
  const [persons, setPersons] = useState<any>([
    {
      first_name: "matin",
      last_name: "hosseinpour",
    },
  ]);

  const searchInPersons = (person: any) => {
    persons.map((item: any, index: number) => {
      if (
        item.first_name == person.first_name &&
        item.last_name == person.last_name
      )
        return index;
    });
    return -1;
  };

  const [newPerson, setNewPerson] = useState<any>({
    first_name: "",
    last_name: "",
  });

  const addPersonHandler = (e: any) => {
    e.preventDefault();

    console.log(newPerson)

    if (
      newPerson.first_name !== "" &&
      newPerson.last_name !== "" &&
      searchInPersons(newPerson) == -1
    )
      setPersons({ ...persons });
  };

  useEffect(() => {console.log(persons)}, [persons])
  return (
    <div className={"w-full flex flex-col"}>
      <div
        className={
          "flex flex-row justify-between items-center pb-2 border-b-[1px] border-gray-600"
        }
      >
        <div>Persons List</div>
        <div className={"bg-blue-400 text-white p-2 rounded-md cursor-pointer"}>
          add Person
        </div>
      </div>
      <div>
        <form onSubmit={addPersonHandler}>
          <input
            value={newPerson.first_name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, first_name: e.target.value })
            }
          />
          <input
            value={newPerson.last_name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, last_name: e.target.value })
            }
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {persons.length ? (
          persons.map((person: any, index: number) => {
            return <PersonItem data={person} key={index} />;
          })
        ) : (
          <div>no person added</div>
        )}
      </div>
    </div>
  );
};

export default PersonsList;
