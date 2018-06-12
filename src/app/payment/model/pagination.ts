export class Pagination {
  total: number;
  current: string;
  links: Object[];
  from: number;
  to: number;
  left: boolean;
  right: boolean;
  leftEnd: boolean;
  rightEnd: boolean;

  constructor(attrs: { total?: number, current?: string, links?: Object[], from?: number, to?: number, left?: boolean, right?: boolean, leftEnd?: boolean, rightEnd?: boolean}= {}) {
    this.total = attrs.total;
    this.current = attrs.current;
    this.links = attrs.links;
    this.from = attrs.from;
    this.to = attrs.to;
    this.left = attrs.left;
    this.right = attrs.right;
    this.leftEnd = attrs.leftEnd;
    this.rightEnd = attrs.rightEnd;
  }


}
