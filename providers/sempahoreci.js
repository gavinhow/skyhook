// sempahoreci.js
// https://circleci.com/docs/1.0/configuration/#notify
// ========
const BaseProvider = require('../util/BaseProvider');

class SempahoreCI extends BaseProvider {
    static getName() {
        return 'SemaphoreCI';
    }

    async parseData(req) {
        this.payload.setEmbedColor(0x343433);
        this.payload.addEmbed({
            title: ` ${this.body.event} #${this.body.build_number}`,
            url: this.body.build_url,
            author: {
                name: `${this.body.project_name}:${this.body.branch_name} - ${this.body.result}`,
                icon_url: `https://github.com/${this.body.payload.committer_name}.png`
            },
            description: `${this.body.commit.author_name}\n${this.body.commit.timestamp}\n${this.body.commit.id}`
        });
    }
}

module.exports = SempahoreCI;