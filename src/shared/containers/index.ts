import { container } from 'tsyringe';
import ICryptosRepository from '../../criptos/repositories/ICriptosRepository';
import CriptosRepository from '../../criptos/infra/api/repositories/CriptosRepository';
import './provider';

container.registerSingleton<ICryptosRepository>('CriptosRepository', CriptosRepository);
