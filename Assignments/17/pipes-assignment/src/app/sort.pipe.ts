import { Pipe, PipeTransform } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string, criteria?: string): any {
    let sortCriteria = criteria;
    const sortValues = ["asc", "desc"];

    if (value.length === 0) {
      return value;
    }
    if (!criteria || !sortValues.includes(sortCriteria)) {
      sortCriteria = "asc";
    }

    if (sortCriteria == "desc") {
      value.sort((a, b) => {
        if (b[propName] < a[propName]) return -1;
        if (b[propName] > a[propName]) return 1;
        return 0;
      });
    } else {
      value.sort((a, b) => {
        if (a[propName] < b[propName]) return -1;
        if (a[propName] > b[propName]) return 1;
        return 0;
      });
    }
    return value;
  }
}
