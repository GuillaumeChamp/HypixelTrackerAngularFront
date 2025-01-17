import {Component, inject} from '@angular/core';
import {IItemModel} from '../../bazaarEntities/IItemModel';
import {UIChart} from 'primeng/chart';
import {IPricingRecord} from '../../bazaarEntities/IPricingRecord';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import {ItemService} from '../../item.service';
import 'chartjs-adapter-moment'
import {NgIf} from '@angular/common';
import {ProgressSpinner} from 'primeng/progressspinner';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-bazaar-item-history-chart',
  imports: [
    UIChart,
    NgIf,
    ProgressSpinner,
    FormsModule
  ],
  templateUrl: './bazaar-item-history-chart.component.html',
  styleUrl: './bazaar-item-history-chart.component.css'
})
export class BazaarItemHistoryChartComponent {
  config = inject(DynamicDialogConfig)
  item!: IItemModel;
  craftDescription?: string;
  dataReady = false;

  constructor(private readonly itemService: ItemService) {
    this.item = this.config.data.item;
    this.craftDescription = this.config.data.craftString;
    this.itemService.getItemPricingHistory(this.item.pricing.itemId)
      .subscribe(records => this.updateChartData(records))
  }

  option = {
    responsive: true,
    scales: {
      x: {
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
        type: 'time',
      }
    }
  };

  chartData: any = undefined;


  public updateData(newWindow: string) {
    this.itemService.getItemPricingHistory(this.item.pricing.itemId, newWindow)
      .subscribe(records => this.updateChartData(records))
  }

  private updateChartData(priceHistory: IPricingRecord[]) {
    if (priceHistory === undefined) {
      this.chartData = undefined;
    } else {
      const buyPrice = priceHistory.map(item => item.buyPrice)
      const sellPrice = priceHistory.map(item => item.sellPrice)
      const timestamp = priceHistory.map(item => item.timestamp)

      this.chartData = {
        labels: timestamp,
        datasets: [{
          label: "buy price",
          data: buyPrice,
          color: "red",
          fill: false,
        }, {
          label: "sell price",
          data: sellPrice,
          color: "blue",
          fill: false
        }]
      }
      this.dataReady = true;
    }
  }

}
