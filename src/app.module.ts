import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { Foo } from './entities/foo.entity';
import DBConfig from './mikro-orm.config'

@Module({
  imports: [
    MikroOrmModule.forRoot({ ...DBConfig }),
    MikroOrmModule.forFeature({ entities: [Foo] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
