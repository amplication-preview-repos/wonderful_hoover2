import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MemberList } from "./member/MemberList";
import { MemberCreate } from "./member/MemberCreate";
import { MemberEdit } from "./member/MemberEdit";
import { MemberShow } from "./member/MemberShow";
import { WorkoutPlanList } from "./workoutPlan/WorkoutPlanList";
import { WorkoutPlanCreate } from "./workoutPlan/WorkoutPlanCreate";
import { WorkoutPlanEdit } from "./workoutPlan/WorkoutPlanEdit";
import { WorkoutPlanShow } from "./workoutPlan/WorkoutPlanShow";
import { FoodPreferenceList } from "./foodPreference/FoodPreferenceList";
import { FoodPreferenceCreate } from "./foodPreference/FoodPreferenceCreate";
import { FoodPreferenceEdit } from "./foodPreference/FoodPreferenceEdit";
import { FoodPreferenceShow } from "./foodPreference/FoodPreferenceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Gym Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Member"
          list={MemberList}
          edit={MemberEdit}
          create={MemberCreate}
          show={MemberShow}
        />
        <Resource
          name="WorkoutPlan"
          list={WorkoutPlanList}
          edit={WorkoutPlanEdit}
          create={WorkoutPlanCreate}
          show={WorkoutPlanShow}
        />
        <Resource
          name="FoodPreference"
          list={FoodPreferenceList}
          edit={FoodPreferenceEdit}
          create={FoodPreferenceCreate}
          show={FoodPreferenceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
