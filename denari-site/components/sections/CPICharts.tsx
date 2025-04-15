"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cpiData, cpiOracleLogs } from "@/data/cpi-data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { formatDistanceToNow } from "date-fns";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function CPICharts() {
  // Prepare data for the CPI line chart
  const cpiChartData = {
    labels: cpiData.map((entry) => entry.month),
    datasets: [
      {
        label: "CPI Value",
        data: cpiData.map((entry) => entry.cpi),
        borderColor: "#a78bfa",
        backgroundColor: "rgba(167, 139, 250, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Prepare data for the peg multiplier line chart
  const pegChartData = {
    labels: cpiData.map((entry) => entry.month),
    datasets: [
      {
        label: "Peg Multiplier",
        data: cpiData.map((entry) => entry.peg_multiplier),
        borderColor: "#ec4899",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Prepare data for the monthly percent change bar chart
  const pctChangeChartData = {
    labels: cpiData.filter((entry) => entry.pct_change !== null).map((entry) => entry.month),
    datasets: [
      {
        label: "Monthly % Change",
        data: cpiData.filter((entry) => entry.pct_change !== null).map((entry) => entry.pct_change),
        backgroundColor: cpiData
          .filter((entry) => entry.pct_change !== null)
          .map((entry) => (entry.pct_change! >= 0 ? "#6366f1" : "#f97316")),
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#f8fafc",
        },
      },
      tooltip: {
        backgroundColor: "#1e1b4b",
        borderColor: "#a78bfa",
        borderWidth: 1,
        titleColor: "#f8fafc",
        bodyColor: "#f8fafc",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
    },
  };

  return (
    <section id="cpi-data" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">CPI Data & Peg Multiplier</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore historical CPI data and see how the Denari peg multiplier adjusts to maintain purchasing power.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="charts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="audit">Oracle Audit Log</TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>CPI Values Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <Line data={cpiChartData} options={chartOptions} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Peg Multiplier</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <Line data={pegChartData} options={chartOptions} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Monthly CPI Percent Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <Bar data={pctChangeChartData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="audit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>CPI Oracle Audit Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="px-4 py-3 text-left">Date</th>
                          <th className="px-4 py-3 text-left">TX Hash</th>
                          <th className="px-4 py-3 text-left">Oracle</th>
                          <th className="px-4 py-3 text-left">CPI Value</th>
                          <th className="px-4 py-3 text-left">Block</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cpiOracleLogs.map((log) => (
                          <tr key={log.txHash} className="border-b border-border/20 hover:bg-muted/10">
                            <td className="px-4 py-3">{log.date}</td>
                            <td className="px-4 py-3 font-mono text-xs">
                              <a 
                                href={`https://etherscan.io/tx/${log.txHash}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {`${log.txHash.substring(0, 8)}...${log.txHash.substring(log.txHash.length - 8)}`}
                              </a>
                            </td>
                            <td className="px-4 py-3 font-mono text-xs">
                              <a 
                                href={`https://etherscan.io/address/${log.oracleAddress}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {`${log.oracleAddress.substring(0, 6)}...${log.oracleAddress.substring(log.oracleAddress.length - 4)}`}
                              </a>
                            </td>
                            <td className="px-4 py-3">{log.cpiValue.toFixed(3)}</td>
                            <td className="px-4 py-3">
                              <a 
                                href={`https://etherscan.io/block/${log.blockNumber}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {log.blockNumber}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 