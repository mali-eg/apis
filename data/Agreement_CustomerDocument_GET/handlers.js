var Util = require('../../Util');
var fs = require('fs');

var Handlers = {};

Handlers.defaultHandler = function (request, reply) {

    var orderId = request.params.order_id,
        fileName = request.params.document;

    var filePath = __dirname + "/data/" + fileName;
    var file = fs.readFileSync(filePath);
    var fileBuffer = new Buffer(file);
    //.toString('base64');

    var fileType = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1];

    var contentType = 'application/' + fileType;
    //
    //var payload = '<data contentType="' + contentType + '" contentLength="' + fileBuffer.length + '">' + fileBuffer + '</data>';

    //reply(Util.getData(filePath));
    //setTimeout(function () {
    //    reply(payload).header('Content-Type',contentType).header('content-disposition', 'inline;filename="'+ fileName + '"');
    //}, 3000)

    setTimeout(function () {
        reply(fileBuffer)
            .header('Content-Type', contentType)
            .header('content-disposition', 'attachment;filename="' + fileName + '"')
            .header('Content-Length', file.size);
    }, 3000)

};

module.exports = Handlers;


/*
 var bf = new Buffer('<data contentType="application/pdf" contentLength="14823">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YEymSEiImKC++rZGDHuFiu06jHIFnIVB5UrroZFGIF16mBaaaQz7YlSaFlpxjEHL7K0X23GUakeWODE00gh1XWtkfD80tOIQMf6K6l3Gdj9cdj6hu/8CTwK4aw1lbmRzdHJlYW0NZW5kb2JqDTMwIDAgb2JqIA0xODU2IA1lbmRvYmoNMzEgMCBvYmoNPDwgDS9UeXBlIC9QYWdlIA0vUGFyZW50IDE2IDAgUiANL01lZGlhQm94IFswIDAgNTk1LjQgODQxLjY1XSANL1Jlc291cmNlcyA8PCANL1Byb2NTZXQgWy9QREYgL1RleHRdIA0vRm9udCA8PCANL0Y0IDYgMCBSIA0+PiANPj4gDS9Db250ZW50cyAzMiAwIFIgDT4+IA1lbmRvYmoNMzIgMCBvYmoNPDwgDS9MZW5ndGggNTggDT4+IA1zdHJlYW0NCkJUIC9GNCA2IFRmIDAgMSAtMSAwIDU4OS42IDI4LjEgVG0gKDFkMFMzLWsxMGpBeTA1ZkcpVGogRVQNZW5kc3RyZWFtDWVuZG9iag0xNiAwIG9iag08PCANL1R5cGUgL1BhZ2VzIA0vS2lkcyBbIDE3IDAgUiAyMSAwIFIgMjggMCBSIDMxIDAgUiBdIA0vQ291bnQgNCANPj4gDWVuZG9iag0zMyAwIG9iag08PCANL1R5cGUgL0NhdGFsb2cgDS9QYWdlcyAxNiAwIFIgDT4+IA1lbmRvYmoNCnhyZWYNMCAzNA0KMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAwMDE2IDAwMDAwIG4NCjAwMDAwMDAyNjkgMDAwMDAgbg0KMDAwMDAwMjE3NCAwMDAwMCBuDQowMDAwMDAxOTIyIDAwMDAwIG4NCjAwMDAwMDI0MjIgMDAwMDAgbg0KMDAwMDAwMjQ0MiAwMDAwMCBuDQowMDAwMDAyNTU2IDAwMDAwIG4NCjAwMDAwMDI2NzUgMDAwMDAgbg0KMDAwMDAwMzQzMyAwMDAwMCBuDQowMDAwMDA0MDc1IDAwMDAwIG4NCjAwMDAwMDM3NzcgMDAwMDAgbg0KMDAwMDAwNDcxMSAwMDAwMCBuDQowMDAwMDA0MzU4IDAwMDAwIG4NCjAwMDAwMDUzNTYgMDAwMDAgbg0KMDAwMDAwNDk5MSAwMDAwMCBuDQowMDAwMDEzOTEzIDAwMDAwIG4NCjAwMDAwMDU2MzYgMDAwMDAgbg0KMDAwMDAwNTk0NCAwMDAwMCBuDQowMDAwMDA3MzY1IDAwMDAwIG4NCjAwMDAwMDczODggMDAwMDAgbg0KMDAwMDAwODQ0NiAwMDAwMCBuDQowMDAwMDA4Njc2IDAwMDAwIG4NCjAwMDAwMTAxMjggMDAwMDAgbg0KMDAwMDAxMDQwNyAwMDAwMCBuDQowMDAwMDEwMTUxIDAwMDAwIG4NCjAwMDAwMTA2NTcgMDAwMDAgbg0KMDAwMDAxMDY3OCAwMDAwMCBuDQowMDAwMDExMzY1IDAwMDAwIG4NCjAwMDAwMTE2NzIgMDAwMDAgbg0KMDAwMDAxMzYwOSAwMDAwMCBuDQowMDAwMDEzNjMyIDAwMDAwIG4NCjAwMDAwMTM4MDAgMDAwMDAgbg0KMDAwMDAxNDAwMCAwMDAwMCBuDQp0cmFpbGVyDTw8IA0vU2l6ZSAzNCANL1Jvb3QgMzMgMCBSIA0vSW5mbyAxIDAgUiANPj4NCnN0YXJ0eHJlZg0KMTQwNTYNCiUlRU9G</data>');*/
