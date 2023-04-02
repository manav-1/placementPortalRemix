import Contacts from "~/components/dashboard/contacts";

const data = {
  data: [
    {
      id: "1",
      name: "Robert Wolfkisser",
      position: "Engineer",
      email: "rob_wolf@gmail.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google",
    },
    {
      id: "2",
      name: "Jill Jailbreaker",
      position: "Engineer",
      email: "jj@breaker.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google",
    },
    {
      id: "3",
      name: "Henry Silkeater",
      position: "Designer",
      email: "henry@silkeater.io",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Google",
    },
    {
      id: "4",
      name: "Bill Horsefighter",
      position: "Designer",
      email: "bhorsefighter@gmail.com",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Microsoft",
    },
    {
      id: "5",
      name: "Jeremy Footviewer",
      position: "Manager",
      email: "jeremy@foot.dev",
      mobile: "8745007937",
      addedBy: "Manav",
      company: "Microsoft",
    },
  ],
};

export default function DashboardContacts() {
  return <Contacts data={data.data} />;
}
