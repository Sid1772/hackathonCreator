import { tag } from "./tags.type"

export type Challenge={
title:string,
description:string,
tags:Array<tag>,
createdBy:number,
votes:{
    upvotes:Array<number>,
    downvotes:Array<number>
}
createdOn:Date
}