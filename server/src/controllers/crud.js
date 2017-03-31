export default function crudify(data) {

  return {
    get(ctx, id) {
      ctx.body = data[id];
    },

    list(ctx) {
      ctx.body = data;
    },

    create(ctx) {
      data.push(ctx.request.body);
      ctx.status = 200;
    },

    update(ctx, id) {
      data[id] = ctx.request.body;
      ctx.status = 200;
    },

    remove(ctx, id) {
      data.splice(id, 1);
      ctx.status = 200;
    }
  };
}
