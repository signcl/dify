import { ProviderEnum } from '../declarations'
import type { ProviderConfig } from '../declarations'
import { OpenaiBlack, OpenaiText, OpenaiTransparent } from '@/app/components/base/icons/src/public/llm'
import { IS_CE_EDITION } from '@/config'

const config: ProviderConfig = {
  selector: {
    name: {
      'en': 'Xiaosuan',
      'zh-Hans': '小算',
    },
    icon: <OpenaiBlack className='w-full h-full' />,
  },
  item: {
    key: ProviderEnum.openai,
    titleIcon: {
      'en': <OpenaiText className='h-5' />,
      'zh-Hans': <OpenaiText className='h-5' />,
    },
    subTitleIcon: <OpenaiBlack className='w-6 h-6' />,
    desc: {
      'en': 'Models provided by OpenBayes, such as Thomas-1.',
      'zh-Hans': 'OpenBayes 提供的模型，例如 Thomas-1。',
    },
    bgColor: 'bg-gray-200',
  },
  modal: {
    key: ProviderEnum.openai,
    title: {
      'en': 'Xiaosuan',
      'zh-Hans': '小算',
    },
    icon: <OpenaiTransparent className='w-6 h-6' />,
    link: {
      href: 'https://platform.xiaosuan.com/account/api-keys',
      label: {
        'en': 'Get your API key from Xiaosuan',
        'zh-Hans': '从小算获取 API Key',
      },
    },
    validateKeys: ['openai_api_key'],
    fields: [
      {
        type: 'text',
        key: 'openai_api_key',
        required: true,
        label: {
          'en': 'API Key',
          'zh-Hans': 'API Key',
        },
        placeholder: {
          'en': 'Enter your API key here',
          'zh-Hans': '在此输入您的 API Key',
        },
      },
      {
        type: 'text',
        key: 'openai_organization',
        required: false,
        label: {
          'en': 'Organization ID',
          'zh-Hans': '组织 ID',
        },
        placeholder: {
          'en': 'Enter your Organization ID(Optional)',
          'zh-Hans': '在此输入您的组织 ID（选填）',
        },
      },
      ...(
        IS_CE_EDITION
          ? [{
            type: 'text',
            key: 'openai_api_base',
            required: false,
            label: {
              'en': 'Custom API Domain',
              'zh-Hans': '自定义 API 域名',
            },
            placeholder: {
              'en': 'Enter your API domain, eg: https://example.com/xxx(Optional)',
              'zh-Hans': '在此输入您的 API 域名，如：https://example.com/xxx（选填）',
            },
            help: {
              'en': 'You can configure your server compatible with the OpenAI API specification, or proxy mirror address',
              'zh-Hans': '可配置您的兼容 OpenAI API 规范的服务器，或者代理镜像地址',
            },
          }]
          : []
      ),
    ],
  },
}
export default config
