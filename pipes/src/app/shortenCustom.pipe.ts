import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shortenlen'
})
export class ShortenCustomPipe implements PipeTransform{

  transform(value: any, limit: number) {
    if(value.length > limit){
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}
