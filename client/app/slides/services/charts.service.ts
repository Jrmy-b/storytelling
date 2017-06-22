import { Injectable, Type, ComponentFactoryResolver } from '@angular/core';
import { PieChartComponent, AdvancedPieChartComponent, BarChartComponent, ForceDirectedGraphComponent, GaugeChartComponent,
  HierarchicalEdgeBundlingComponent, LineChartComponent, DendogramComponent,
  NgGraphComponent,TreemapChartComponent
}  from "app/charts";

@Injectable()
export class ChartsService {
  private listWidget;

  constructor(private _resolver : ComponentFactoryResolver) {
    // this.listWidget = Array.from(this._resolver['_factories'].keys());

    this.listWidget = new Map<string, Type<any>>([['PieChartComponent', PieChartComponent], ['AdvancedPieChartComponent', AdvancedPieChartComponent],
     ['BarChartComponent', BarChartComponent], ['ForceDirectedGraphComponent', ForceDirectedGraphComponent],
     ['GaugeChartComponent', GaugeChartComponent], ['HierarchicalEdgeBundlingComponent', HierarchicalEdgeBundlingComponent],
     ['LineChartComponent', LineChartComponent], ['DendogramChartComponent', DendogramComponent], ['NgGraphComponent', NgGraphComponent], ['TreemapChartComponent', TreemapChartComponent]
     ]);
  }

  getChartType(widgetType: string): Type<any> {
     let cmpType = <Type<any>> this.listWidget.get(widgetType);
     return cmpType;
    // return <Type<any>>this.listWidget.find((x: any) => x.name === widgetType);

  }


}
