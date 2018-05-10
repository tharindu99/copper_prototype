import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
  Email,
  Storage,
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Monitor extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
              <StatsCard
                icon={Accessibility}
                iconColor="blue"
                title="Users"
                description="0"
                statIcon={Update}
                statText="Updated"
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              <StatsCard
                icon={Storage}
                iconColor="orange"
                title="Used Space"
                description="0/50"
                small="GB"
                statIcon={Update}
                statLink={{ text: "Get More Space...", href: "#getMoreSpace" }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              <StatsCard
                icon={Email}
                iconColor="green"
                title="Email count"
                description="0"
                statIcon={DateRange}
                statText="Last 24 Hours"
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              <StatsCard
                icon={InfoOutline}
                iconColor="red"
                title="Warnings"
                description="0"
                statIcon={LocalOffer}
                statText="Issues and special notices"
              />
            </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="System Usage"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    0%
                  </span>{" "}
                  increase in today.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 0 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Email Usage(Monthly)"
              text="(dummy data)"
              statIcon={AccessTime}
              statText="updated 0 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              chartColor="red"
              title="Memory usage"
              text="(dummy data)"
              statIcon={AccessTime}
              statText="updated 0 minutes ago"
            />
          </ItemGrid>
        </Grid>
        
      </div>
    );
  }
}

Monitor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Monitor);
