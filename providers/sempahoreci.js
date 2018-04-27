// sempahoreci.js
// https://circleci.com/docs/1.0/configuration/#notify
// ========
const BaseProvider = require('../util/BaseProvider');

class SempahoreCI extends BaseProvider {
    static getName() {
        return 'SemaphoreCI';
    }

    async parseData(req) {
        let result = (this.body.result).toUpperCase();
        this.payload.setEmbedColor(0xF9F2DC);
        this.payload.addEmbed({
            title: `${this.body.event} #${this.body.build_number}`,
            url: this.body.build_url,
            author: {
                name: `${this.body.project_name}:${this.body.branch_name}`
            },
            description: `${this.body.result}`
        });
    }
}

module.exports = SempahoreCI;